const Benchmark = {
    run: function() {
        var VAR_1 = "72263311";
        function FUNCTION_1(VAR_2) {
          return VAR_1.replace(/(\d)\1*/g, function (VAR_3, VAR_4) {
            return VAR_3.length + VAR_4;
          });
        }
        Array(10).fill().reduce(FUNCTION_1, VAR_1).length;
    }
};