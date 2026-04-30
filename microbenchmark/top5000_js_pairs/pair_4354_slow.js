const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2 = 0;
        for (var VAR_3 = 0; VAR_3 < 15000; VAR_3++) {
          VAR_1.push(VAR_3 + "");
        }
        function FUNCTION_1(VAR_4, VAR_5) {
          VAR_2 += parseInt(VAR_4, 10);
        }
        var VAR_6 = VAR_1 ? VAR_1.VAR_6 : 0;
        function FUNCTION_2(VAR_7) {
          return VAR_7 ? VAR_4.VAR_6 : 0;
        }
        for (var VAR_8 = 0; VAR_8 < VAR_1.VAR_6; VAR_8++) {
          FUNCTION_1.apply(this, [VAR_1[VAR_8], VAR_2]);
        }
    }
};