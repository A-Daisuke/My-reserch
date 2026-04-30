const Benchmark = {
    run: function() {
        var VAR_1 =
          "96h11k4959q615948s50922o38h1453ij38w73413d5577lzrqw3780b389750vf100zd29z73j5wh73l6965n85vm77cw10awrjr29265289222238n10013uk10062f9449acbhfgcm35j78q80";
        var VAR_2 = 0;
        Array.prototype.slice.call(VAR_1, 0).forEach(function (VAR_3) {
          var VAR_4 = parseInt(VAR_3);
          if (!isNaN(VAR_4)) VAR_2 += VAR_4;
        });
    }
};