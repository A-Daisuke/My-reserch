const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_3, VAR_4, VAR_5) {
          VAR_3 += "";
          VAR_4 += "";
          if (VAR_4.length <= 0) return VAR_3.length + 1;
          var VAR_6 = 0,
            VAR_7 = 0;
          var VAR_8 = VAR_5 ? 1 : VAR_4.length;
          while (true) {
            VAR_7 = VAR_3.indexOf(VAR_4, VAR_7);
            if (VAR_7 >= 0) {
              VAR_6++;
              VAR_7 += VAR_8;
            } else break;
          }
          return VAR_6;
        }
        var VAR_1 = new Array(10000).join(encodeURI("hello龜"));
        var VAR_2 = VAR_1.length - 2 * FUNCTION_1(VAR_1, "%");
    }
};