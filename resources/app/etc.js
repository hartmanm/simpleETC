/***********************************************************************************************
**
**  Author:       Michael Hartman
**
**  Date:           2016-12-19
**
**  Filename:       etc.js
**
**  Description:    ETC/BTC Ticker
**
***********************************************************************************************/

    document.addEventListener( "DOMContentLoaded", getData );

    document.addEventListener( "DOMContentLoaded", refresh(30000) );

    function refresh( t )
    {
        setTimeout("location.reload(true);", t);
    }

    function getData()
    {
        event.preventDefault();

        var req = new XMLHttpRequest();

        req.open("GET", "https://api.coincap.io/v2/assets/etc_btc", false);

        req.addEventListener( "load",function()
        {
            if( req.status >= 200 && req.status < 403 )
            {
                var response = JSON.parse( req.responseText );

                var z = response.rate;

                var n = JSON.stringify( z );

                if( z.length != 10 && z.length > 6 )
                {
                  var q = z.length - 6
                  n = n.slice(1, -q);
                }

                if( z.length > 10 )
                {
                    n = n.slice(1, -6);
                }

                if( z.length == 10  )
                {
                    n = n.slice(1, -5);
                }

                if( n.length == 6  )
                {
                    document.getElementById( "etc" ).innerHTML = n;
                }
            }

            else
            {
                console.log( "Error: " + req.statusText );
            }
        });

        req.send( null );
    }
