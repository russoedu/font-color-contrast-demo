import { Paper } from "@mui/material";
import { Code } from "../components/Code";
import './Home.css'



export function Home () {
  return (
    <Paper className='container' elevation={3}>
      <h1>font-color-contrast</h1>
      <p>
        <a href="https://www.npmjs.com/package/font-color-contrast">
          <img src="https://camo.githubusercontent.com/a541dffe52f51f77d240db7203a491f55eaaba2b12cc190456d95696795ee021/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f666f6e742d636f6c6f722d636f6e74726173742e737667" alt="npm" data-canonical-src="https://img.shields.io/npm/v/font-color-contrast.svg"/>
        </a>
        <a href="https://github.com/russoedu/font-color-contrast/actions/workflows/main.yml">
          <img src="https://github.com/russoedu/font-color-contrast/actions/workflows/main.yml/badge.svg" alt="CI Pipeline"/>
        </a>
        <a href="https://scrutinizer-ci.com/g/russoedu/font-color-contrast/build-status/master">
          <img src="https://camo.githubusercontent.com/f8a205550f1cdd1c2392196be46394495d5e4966a8c1cf9e15f30bd3057e1227/68747470733a2f2f7363727574696e697a65722d63692e636f6d2f672f727573736f6564752f666f6e742d636f6c6f722d636f6e74726173742f6261646765732f6275696c642e706e673f623d6d6173746572" alt="Build Status" data-canonical-src="https://scrutinizer-ci.com/g/russoedu/font-color-contrast/badges/build.png?b=master"/>
        </a>
        <a href="https://coveralls.io/github/russoedu/font-color-contrast?branch=ts">
            <img src="https://camo.githubusercontent.com/e489fcf209af233f6b8e15eca9be16dbf5ebbbcef18ce767d1c10e8076963692/68747470733a2f2f636f766572616c6c732e696f2f7265706f732f6769746875622f727573736f6564752f666f6e742d636f6c6f722d636f6e74726173742f62616467652e7376673f6272616e63683d7473" alt="Coverage Status" data-canonical-src="https://coveralls.io/repos/github/russoedu/font-color-contrast/badge.svg?branch=ts" />
        </a>
        <a href="https://scrutinizer-ci.com/g/russoedu/font-color-contrast/?branch=master">
          <img src="https://camo.githubusercontent.com/4006117bbba0c578c05fedad4b296974ce1f391fcd45e9e44372255a1118af0c/68747470733a2f2f7363727574696e697a65722d63692e636f6d2f672f727573736f6564752f666f6e742d636f6c6f722d636f6e74726173742f6261646765732f7175616c6974792d73636f72652e706e673f623d6d6173746572" alt="Scrutinizer Code Quality" data-canonical-src="https://scrutinizer-ci.com/g/russoedu/font-color-contrast/badges/quality-score.png?b=master" />
        </a>
        <a href="https://codeclimate.com/github/russoedu/font-color-contrast">
          <img src="https://camo.githubusercontent.com/b56e95c32295deb6e822d85e155cd01ce8e9c3e25301cd821d0b48b63dceab39/68747470733a2f2f636f6465636c696d6174652e636f6d2f6769746875622f6477796c2f657374612f6261646765732f6770612e737667" alt="Code Climate" data-canonical-src="https://codeclimate.com/github/dwyl/esta/badges/gpa.svg" />
        </a>
        <a href="https://snyk.io/test/npm/font-color-contrast">
          <img src="https://camo.githubusercontent.com/77980cfc13198e616164c295c2ef0ef3fe9d4d4ad0342487847401cd09bfeb02/68747470733a2f2f736e796b2e696f2f746573742f6e706d2f666f6e742d636f6c6f722d636f6e74726173742f62616467652e737667" alt="Known Vulnerabilities" data-canonical-src="https://snyk.io/test/npm/font-color-contrast/badge.svg" />
        </a>
      </p>
      <p><strong>font-color-contrast</strong> is a JavaScript module to help you select black or white for a font according to the brightness of the background color to give you the best possible contrast and readability.</p>
      <h3>How does it work</h3>
      <p><strong>font-color-contrast</strong> uses the algorythm described in the article <a href="https://alienryderflex.com/hsp.html">HSP Color Model — Alternative to HSV (HSB) and HSL</a> where brightness is described as</p>
      <blockquote>
        <img alt="brightness = sqrt(0.299 * red^2 + 0.587 * green^2 + 0.114 * blue^2)" src="https://render.githubusercontent.com/render/math?math=brightness=\sqrt{0.299 * red^2 %2B 0.587 * green^2 %2B 0.114 * blue^2}" />
      </blockquote>
      <p>Any brightness smaller than 50% means the background is dark.</p>
      <p>Any brightness bigger than 50% means the background is light.</p>
      <p>This way, <strong>font-color-contrast</strong> will (with the default threshold of 0.5) return white (<code>'#ffffff'</code>) for dark brightness and black (<code>'#000000'</code>) for light brightness.</p>
      <p>You can change this default behaviour by passing the optional <code>threshold</code> parameter, so the comparison will be with the value you passed, not with 50%.</p>
      <h2>Installation</h2>
      <Code>
        npm i font-color-contrast
      </Code>
      <h2>Usage</h2>
      <p>You can use <strong>font-color-contrast</strong> 4 ways, with an optional parameter for contrast <code>threshold</code> (from 0 to 1).</p>
      <h3>Hexadecimal color string</h3>
      <Code
        ts
        content={`/**
* @param hex The hex color string that must be a valid hexadecima color number to work correctly. Works with or without '#', with 3 or 6 color chars.
* @param threshold Contrast threshold to control the resulting font color, float values from 0 to 1. Default is 0.5.
*/
function fontColorContrast (hex: string, threshold?: number): '#ffffff' | '#000000'`}
      />
      <p>It can have the hash symbol or not, and use 6 or 3 characters. The <code>threshold</code> parameter is optional.</p>
      <Code
        ts
        content={`import fontColorContrast from 'font-color-contrast'

const myStringWithHash = '#00CC99'
const fc1 = fontColorContrast(myStringWithHash) // '#000000'

const myStringWithHash3 = '#0C9'
const fc2 = fontColorContrast(myStringWithHash) // '#000000'

const myStringWithoutHash = '00CC99'
const fc3 = fontColorContrast(myStringWithoutHash) // '#000000'
const fc4 = fontColorContrast(myStringWithoutHash, 0.7) // '#ffffff'`}
      />
      <Code
        ts
        content={``}
      />
    </Paper>
  )
}
