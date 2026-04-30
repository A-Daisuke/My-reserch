const Benchmark = {
    run: function() {
        var VAR_1 = new Array(1000);
        function FUNCTION_1(VAR_2) {
          for (let VAR_3 = 0; VAR_3 < VAR_1.length; VAR_3++) {
            if (typeof VAR_1[VAR_3] === "undefined") {
              VAR_1.splice(VAR_3, 1);
              VAR_3--;
            }
          }
        }
        FUNCTION_1(VAR_1);
    }
};