const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          return Math.floor(VAR_1 / Math.pow(10, Math.floor(Math.log(VAR_1) / Math.log(10))));
        }
        function FUNCTION_2(VAR_2) {
          return parseInt(VAR_1.toString().charAt(0), 10);
        }
        function FUNCTION_3(VAR_3) {
          return VAR_1.toString().charCodeAt(0) - 48;
        }
        var VAR_4 = Array.apply(null, new Array(10000)).map(function (VAR_5, VAR_6) {
          return VAR_6 * 100;
        });
        VAR_4.map(FUNCTION_1);
    }
};