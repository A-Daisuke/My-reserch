const Benchmark = {
    run: function() {
        function FUNCTION_2(VAR_2) {
          return /(a.*b|b.*a)/.test(VAR_2);
        }
        function FUNCTION_1(VAR_1) {
          return /a/.test(VAR_1) && /b/.test(VAR_1);
        }
        function FUNCTION_3(VAR_3) {
          var VAR_4 = "";
          var VAR_5 =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
          for (var VAR_6 = 0; VAR_6 < VAR_3; VAR_6++)
            VAR_4 += VAR_5.charAt(Math.floor(Math.random() * VAR_5.length));
          return VAR_4;
        }
        FUNCTION_1(FUNCTION_3(100));
    }
};