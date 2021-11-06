import { useState } from 'react'
import { HexColorPicker } from 'react-colorful'
import fontColorContrast from 'font-color-contrast'
import './ColorPicker.css'

const fontFamilies = [
  'serif',
  'sans-serif',
  'cursive',
  'fantasy',
  'monospace',
  'Andale Mono',
  'Arial',
  'Arial Black',
  'Comic Sans MS',
  'Courier New',
  'Georgia',
  'Impact',
  'Monotype.com',
  'Times New Roman',
  'Trebuchet MS',
  'Verdana',
  'Times',
  'Helvetica',
  'Courier',
]

const fontSizes = [
  'xx-small',
  'x-small',
  'small',
  'medium',
  'large',
  'x-large',
  'xx-large',
  '6pt',
  '7pt',
  '8pt',
  '9pt',
  '10pt',
  '11pt',
  '12pt',
  '14pt',
  '16pt',
  '18pt',
  '20pt',
]

export function ColorPicker (props: {
    slice: number,
    setSlice: React.Dispatch<React.SetStateAction<number>>,
    color: string,
    setColor: React.Dispatch<React.SetStateAction<string>>
    fontSlice: number,
    setFontSlice: React.Dispatch<React.SetStateAction<number>>
  }) {

  const colorStyle = {
    backgroundColor: props.color,
    backgroundImage: `linear-gradient(to right, white 233px, ${props.color} 235px)`,
    color: fontColorContrast(props.color)
  }

  function handleFontSlider(event: any) {
    props.setSlice(event.target.value);
  }

  function handleSizeSlider(event: any) {
    console.log(props.fontSlice);
    
    props.setFontSlice(event.target.value);
  }

  const content = fontFamilies.map(font => {
    // const sizesText = fontSizes.map(size =>{
    //   return(
    //     <p className={'size-' + size} style={{ fontSize: size }}>This is {size}</p>
    //   )
    // })
    return (
      <div style={{ fontFamily: font, color: fontColorContrast(props.color), fontSize: fontSizes[props.fontSlice]}}>
        <h1 className='font-name'>Font: {font}, size: {fontSizes[props.fontSlice]}</h1>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non mi sit amet eros ultrices efficitur. Integer et orci accumsan lacus luctus placerat non ut tellus. Praesent et cursus turpis. Phasellus pharetra orci et enim congue sodales. Cras quis tellus scelerisque, pharetra augue sed, lacinia diam. Nulla sed varius tellus. Fusce egestas neque vitae aliquet laoreet. Vivamus vestibulum diam non tellus tristique, sit amet imperdiet sem gravida.
</p><p>
Mauris felis orci, accumsan vitae vestibulum et, vehicula ac turpis. Aliquam orci ex, cursus sed porttitor sed, ultricies sit amet augue. Nunc iaculis elementum varius. Curabitur ullamcorper auctor odio, ut eleifend metus. Nulla porta massa ut lorem suscipit tincidunt. Aenean a augue lectus. Cras a odio dignissim, pellentesque dolor et, ultrices quam. Duis id tincidunt lorem. In porta massa non tempor interdum. Morbi eu nisl at nibh cursus vehicula. Etiam posuere scelerisque purus, ac venenatis sem auctor sit amet. Quisque tempor ac odio eget scelerisque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum a consectetur sem, vel sodales neque. Pellentesque vestibulum lacus a arcu gravida efficitur.
</p><p>
Nullam sit amet lorem lacus. Vivamus ante felis, tempus nec dapibus porttitor, porta id nibh. Quisque faucibus, lacus eu vehicula commodo, lectus orci commodo nibh, et ultricies nunc tellus at est. Nulla vel suscipit lorem. Mauris gravida blandit ligula, pretium scelerisque odio facilisis quis. Fusce et urna eu diam varius sollicitudin. In vel nibh id orci mattis lacinia. Nullam ac purus ac est pretium molestie quis quis velit.
</p><p>
Etiam viverra tortor vitae sem dictum luctus. Sed et faucibus risus. Sed sodales nunc felis, eget consectetur odio dignissim at. Sed tempus mi quis risus tempus gravida. Ut eu sagittis urna. Ut est sem, porttitor ut hendrerit sit amet, pulvinar non est. Quisque consequat sem a enim porta congue. Maecenas tortor est, tincidunt ac ex sed, efficitur porta dui. Morbi rhoncus nisi nibh, sit amet consectetur libero ultricies vel. Integer fermentum sollicitudin sapien quis aliquam. Sed iaculis venenatis eleifend. Praesent feugiat massa eget nibh egestas, ut dapibus neque tincidunt. Proin vel turpis rhoncus, scelerisque nunc nec, euismod libero. Donec sollicitudin nibh tellus, sed imperdiet metus malesuada sit amet. Duis consequat, lacus elementum hendrerit ultrices, arcu ex mollis leo, nec aliquam est ex nec sem.
</p><p>
Praesent fermentum a ligula a blandit. Cras rhoncus laoreet neque, sed hendrerit nulla malesuada mollis. Fusce vitae condimentum quam. Integer nulla nibh, ultrices nec augue quis, porttitor porttitor turpis. Cras non iaculis eros, sed laoreet nisi. Nullam a nisl in dui venenatis cursus. Nullam viverra sed odio id tincidunt.
        </p>
        {/* {sizesText} */}
      </div>
    )
  })

  return (
    <div className='demo-container'>
      <div className="slidecontainer">
        <input
          type="range"
          className="slider"
          min="0"
          max={fontFamilies.length - 1}
          value={props.slice}
          id="myRange"
          onChange={handleFontSlider}
        />
        <p>Page {Number(props.slice) + 1} of {(fontFamilies.length).toFixed(0)}</p>
      </div>
      <div className='color-picker'>
        <HexColorPicker color={props.color} onChange={props.setColor} />
      </div>
      <div className='demo-bg' style={colorStyle}>
        <input
          type="range"
          className="slider font-slider"
          min="0"
          max={fontFamilies.length - 1}
          value={props.fontSlice}
          id="myRange"
          onChange={handleSizeSlider}
        />
        {content[props.slice]}
      </div>
    </div>
  )
}