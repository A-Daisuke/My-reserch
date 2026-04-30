const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          var VAR_2 = "";
          var VAR_3 =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
          for (var VAR_4 = 0; VAR_4 < VAR_1; VAR_4++)
            VAR_2 += VAR_3.charAt(Math.floor(Math.random() * VAR_3.length));
          return VAR_2;
        }
        var VAR_5 = FUNCTION_1(10000);
        function FUNCTION_2(VAR_6) {
          return VAR_6 >= "0" && VAR_6 <= "9";
        }
        let VAR_7 = false;
        for (let VAR_8 = 0; VAR_8 < VAR_5.length; VAR_8++) {
          VAR_7 |= FUNCTION_2(VAR_5.charAt(VAR_8));
        }
        console.log(VAR_7);
    }
};