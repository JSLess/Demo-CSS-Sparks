
<div align = center >

#  CSS Sparks Demo

Simple demonstration of CSS Sparks, a technique  
to observe user events without JavaScript.

<br>

[\[ Demo \]][Demo]  
[\[ Blog \]][Blog]

</div>

<br>

## How To

-   Install **[Deno]**

-   Start the server

    ```sh
    deno run dev
    ```

-   Open a browser at

    ```
    http://localhost:8000
    ```

<br>

## Observation

Upon hovering / unhovering the element on the left side,  
the indicator on the right changes it's background color.

The spark allows the server to observe the hover / unhover  
event, which it responds to with a style tag overriding the  
indicators' background color.  

<br>

<!----------------------------------------------------------------------------->

[Blog]: https://jsless.deno.dev/blog/CSS-Event-Listeners-Sparks
[Demo]: https://jsless-demo-sparks.deno.dev/
[Deno]: https://deno.com/
