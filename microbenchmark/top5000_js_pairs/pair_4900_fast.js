const Benchmark = {
    run: function() {
        var VAR_1 = "72263311";
        function FUNCTION_1(VAR_2) {
          return VAR_1
            .match(/(\d)\1*/g)
            .map(function (VAR_5) {
              return VAR_5.length + VAR_5[0];
            })
            .join("");
        }
        Array(10).fill().reduce(FUNCTION_1, VAR_1).length;
    }
};