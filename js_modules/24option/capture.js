        (function() {
        setTimeout(function () {
//              if(typeof jQuery=='undefined') {

                      var headTag = document.getElementsByTagName("head")[0];
                      var jqTag = document.createElement('script');
                      jqTag.type = 'text/javascript';
                      jqTag.src = 'https://code.jquery.com/jquery-2.1.1.min.js';
                      jqTag.onload = myJQueryCode;
                      headTag.appendChild(jqTag);
//               } else {
//                   myJQueryCode();
//               }
        }, 3000);
                
            
            function getUserIp() {
                if (window.XMLHttpRequest) xmlhttp = new XMLHttpRequest();
                else xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

                xmlhttp.open("GET","http://api.hostip.info/get_html.php",false);
                xmlhttp.send();

                hostipInfo = xmlhttp.responseText.split("\n");

                for (i=0; hostipInfo.length >= i; i++) {
                    ipAddress = hostipInfo[i].split(":");
                    if ( ipAddress[0] == "IP" ) return ipAddress[1];
                }

                return false;
            }

            function getCurrentDate() {
                var currentdate = new Date(); 
                var datetime = currentdate.getFullYear()
                            + (((currentdate.getMonth()+1) < 10)?"0":"") + (currentdate.getMonth()+1)
                            + ((currentdate.getDate() < 10)?"0":"") + currentdate.getDate()
                            + ((currentdate.getHours() < 10)?"0":"") + currentdate.getHours()
                            + ((currentdate.getMinutes() < 10)?"0":"") + currentdate.getMinutes()
                            + ((currentdate.getSeconds() < 10)?"0":"") + currentdate.getSeconds()
                            + currentdate.getMilliseconds();
                return datetime;
            }

            function getTimestamp() {
                return Date.now();
            }

            function myJQueryCode() {
                $( document ).ready(function() {
                    console.log( "ready!" );
                    var currentStamp = getTimestamp();

                    function renderData($input) {

                        // sessionId.replace(/[\s.]/g,''),

                        var userData = {
                                sessionId: currentStamp,
                                url: window.location.href,
                                currentDate: getCurrentDate(),
                                timestamp: getTimestamp(),
                                name: $input.attr('name'),
                                id: $input.attr('id'),
                                classStr: $input.attr('class'),
                                type: $input.attr('type'),
                                placeholder: $input.attr('placeholder'),
                                value: $input.val()
                            }
                        return userData;
                    }

                    $(document).on('change', 'input:checked', function(e) {
                        if ($(this).val().length) {
                            console.log('renderData2', renderData($(this)));
                        }
                    });
                    
                    $(document).on('blur','input', function(e) {
                        if ($(this).val().length) {
                            console.log('renderData2', renderData($(this)));
                        }
                    });
                });
            }
        })();

