const Benchmark = {
    run: function() {
        var VAR_1 =
            "96h11k4959q615948s50922o38h1453ij38w73413d5577lzrqw3780b389750vf100zd29z73j5wh73l6965n85vm77cw10awrjr29265289222238n10013uk10062f9449acbhfgcm35j78q80",
          VAR_2 = 0;
        for (var VAR_3 = 0; VAR_3 < VAR_1.match(/[0-9]/g).length; VAR_3++) {
          VAR_2 += parseInt(VAR_1.match(/[0-9]/g)[VAR_3]);
        }
    }
};