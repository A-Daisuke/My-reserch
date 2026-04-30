const Benchmark = {
    run: function() {
        var VAR_1 =
          "http://www.google.ru/webhp?sourceid=chrome-instant&ix=hea&ie=UTF-8&ion=1#hl=ru&cp=10&gs_id=7y&xhr=t&q=hello+google&pq=node-expat+cdata&pf=p&sclient=psy-ab&newwindow=1&biw=1440&bih=799&site=webhp&source=hp&pbx=1&oq=hello+goog&aq=0&aqi=g1g-s1&aql=&gs_sm=&gs_upl=&bav=on.2,or.r_gc.r_pw.,cf.osb&fp=addb1b4e00779162&ion=1";
        var VAR_2 = "";
        VAR_1.replace(/[^\w-.~]/g, function (VAR_3) {
          return "%" + VAR_3.charCodeAt(0);
        });
    }
};