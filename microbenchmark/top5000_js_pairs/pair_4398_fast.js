const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 20; VAR_2++) {
          VAR_1.push(1);
          VAR_1.push(1.03);
        }
        function FUNCTION_1(VAR_3) {
          if (parseInt(VAR_2) === VAR_2) return VAR_2.toFixed(1);
          else return VAR_2;
        }
        var VAR_4 = VAR_1.map(FUNCTION_1);
    }
};