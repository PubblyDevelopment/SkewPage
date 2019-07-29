## SkewPage
At Pubbly, I was asked by the design team to build a login page in an animated, skewed div format to evoke the dynamic feel of our comics and graphic novels. When design asked for the same look on other pages (an "About Us", for example), I realized that my first implementation didn't translate to other kinds of content. I wanted to create a skewed layout that could apply to various _types_ of pages, whether form-heavy (Login) or text-heavy (About Us).

#### Attempt #1
When you skew a div, it also skews the content. The text is therefore hard to read, and I wanted to fix this. My first try was two divs, one inside the other. The first had the skew transform applied, and contained a second div within it with the skew removed. This resolved the legibility issue, but affected the overall layout. I had to use some really messy negative side margins to manually nudge each element in place. I then animated the skewing and nudges. 
It _looked_ okay, but was sloppy under the hood. It also didn't work at all for a lot of text. Text isn't as consistent as forms are. I also wanted to be able to use WordPress's built-in pages functionality to make any number of pages we could want in this design. So I needed something that could contain different kinds of content.

#### Attempt #2
The second attempt was heavily guided by [this site](https://www.viget.com/articles/skewed-hit-boxes-with-css-transforms/). The solution was to unskew each _individual_ element, one-by-one. 
The challenge here was elegantly skewing and unskewing each element if the page is resized. On mobile, I do away with the skew since it doens't translate well. I wrote JS script that searches through all child elements in the center div and unskews them as approproiate, using window.onresize. 

```
function addUnskew() {
    for (let i = 0; i < unskewedNodes.children.length; i++) {
        if (!unskewedNodes.children[i].classList.contains('unskew')) {
            unskewedNodes.children[i].classList.add('unskew');
        }
    }
}
 ```

##### Future Attempt?
I like to create a pure CSS solution, which might be possible with SASS mixins. 

#### Demo
Click [here](https://wallispubbly.github.io/SkewPage/) to see Skew Page in action for the fictional Hudson Street Comics store. 
