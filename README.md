# shoprite-circular-parser

https://shop.shoprite.com/store/60EF711/circulars/1011708?page=0

That is a URL to the weekly circular. Hovering over items on the page makes a modal appear for the hovered-over item, leading me to think, "hmmm, I wonder if this appears in the page source". One Cmd+Option+U and Cmd+F match for "pumpkin cake donuts" indicates the items are indeed somewhere within the source.

The intention of this project is to parse through the HTML from a given link like the one above, and return a JSON representation of the items contained in the circular.