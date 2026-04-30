const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          var VAR_2 = (Math.random() * 16) | 0,
            VAR_3 = VAR_1 == "x" ? FUNCTION_1 : (FUNCTION_1 & 3) | 8;
          return VAR_3.toString(16);
        }
        var VAR_4 = /[xy]/g;
        var VAR_5 = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";
        var VAR_6 = VAR_5.replace(VAR_4, FUNCTION_1);
    }
};