jQuery(document).ready(function(){function e(e,n){return"min"===n?parseFloat(e)<=6?6:e:"max"===n?parseFloat(e)>=20?20:e:void 0}jQuery(".contentbg").each(function(){var e=$(this).css("font-size");$(this).attr("originalSize",e)}),jQuery(".resetMe").on("click",function(){jQuery(".contentbg").each(function(){if(null!=jQuery(this).text()&&""!=jQuery(this).text())if("textDesc mof"!=jQuery(this).attr("class")){var e=$(this).attr("originalSize");$(this).css("font-size",e)}else $(this).css("font-size","13px")})}),jQuery(".increaseFont").click(function(){return jQuery(".contentbg").each(function(){if(null!=jQuery(this).text()&&""!=jQuery(this).text()){n=(n=jQuery(this).css("font-size")).replace("px","");var n=parseInt(n)+1;jQuery(this).css("font-size",e(n,"max")+"px")}}),!1}),jQuery(".decreaseFont").click(function(){return jQuery(".contentbg").each(function(){if(null!=jQuery(this).text()&&""!=jQuery(this).text()){n=(n=jQuery(this).css("font-size")).replace("px","");var n=parseInt(n)-1;jQuery(this).css("font-size",e(n,"min")+"px")}}),!1})}),$(document).ready(function(){$(".tree-toggler").ready(function(){$(".tree-toggler:not(.active)").next().attr("style","display: none;")}),$(".tree-toggler").on("click",function(){if($(this).hasClass("active")){if($(this).hasClass("active")){var e=$(this);$(this).next().slideUp(300,function(){$(this).find(".sgds-icon.sgds-icon-chevron-down").addClass("sgds-icon-chevron-up"),$(this).find(".sgds-icon.sgds-icon-chevron-down").removeClass("sgds-icon-chevron-down");var n=$(this).find(".active");n.removeClass("active"),n.next().slideUp(function(){$(this).attr("style","display: none;")}),e.removeClass("active"),e.find(".sgds-icon.sgds-icon-chevron-up").addClass("sgds-icon-chevron-down"),e.find(".sgds-icon.sgds-icon-chevron-up").removeClass("sgds-icon-chevron-up")})}}else $(this).addClass("active"),$(this).find(".sgds-icon").addClass("sgds-icon-chevron-up"),$(this).find(".sgds-icon").removeClass("sgds-icon-chevron-down"),$(this).next().slideDown(300)})}),function(e){e.fn.printThis=function(n){var t=e.extend({},{title:"New Document",styles:null,exclude:null,include:null},n||{}),i=window.open("",t.title,"height=800,width=1020,scrollbars=yes");i.document.write("<html><head>"),i.document.write("<title>"+t.title+"</title>");var s=this.clone();if(t.styles)if(e.isArray(t.styles))e.each(t.styles,function(n,t){var s=i.document.createElement("link");s.rel="stylesheet",s.href=t,e(i.document).find("head").append(s)});else{var o=i.document.createElement("link");o.rel="stylesheet",o.href=t.styles,e(i.document).find("head").append(o)}i.document.write("</head><body>"),t.exclude&&(e.isArray(t.exclude)?e.each(t.exclude,function(n,t){e(s).find(t).remove()}):e(s).find(t.exclude).remove()),t.include&&(e.isArray(t.include)?e.each(t.include,function(n,t){e(s).find(t).show()}):e(s).find(t.include).show()),e(i.document.body).append(s),i.document.write("</body></html>"),i.document.close(),i.focus(),i.print()}}(jQuery),$(document).ready(function(e){$("button#print_btn").on("click",function(e){$(".contentbg").printThis({title:""})})}),$(document).ready(function(){var e=!1;bowser.msie&&parseInt(bowser.version)<11?e=!0:bowser.firefox&&parseInt(bowser.version)<27?e=!0:bowser.chrome&&parseInt(bowser.version)<22?e=!0:bowser.safari&&parseInt(bowser.version)<7?e=!0:bowser.opera&&parseInt(bowser.version)<14&&(e=!0),e?$("#mynotification").show():$("#mynotification").hide(),$("#unsuclosebtn").click(function(){$("#mynotification").hide()})}),$(document).ready(function(){$("#Navigation").sticky({topSpacing:0})});for(var linkList=$("a"),i=0;i<linkList.length;i++){var isExternalLink=!1,linkElement=$(linkList[i]),innerHtmlText=linkElement.html(),hrefText=linkElement.attr("href");if(!(null!=innerHtmlText&&innerHtmlText.toLowerCase().indexOf("sgds-icon sgds-icon-external")>-1)&&(!(innerHtmlText.indexOf("<img")>-1)&&null!=hrefText&&!(null!=hrefText&&hrefText.toLowerCase().indexOf("mof.gov.sg")>-1)&&(null!=hrefText&&(hrefText.toLowerCase().indexOf("http://")>-1||hrefText.toLowerCase().indexOf("https://")>-1)&&(isExternalLink=!0),isExternalLink))){var newInnerHtml=innerHtmlText+" <i class='sgds-icon sgds-icon-external'></i>";linkElement.html(newInnerHtml)}}