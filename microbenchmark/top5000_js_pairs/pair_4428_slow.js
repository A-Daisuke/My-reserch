const Benchmark = {
    run: function() {
        var VAR_1 = [123456, 987654, 999999, 1111111, 546454];
        function FUNCTION_1(VAR_2, VAR_3) {
          VAR_3.push(VAR_2);
          if (VAR_2 !== 1) FUNCTION_1(VAR_2 % 2 === 0 ? VAR_2 / 2 : VAR_2 * 3 + 1, VAR_3);
        }
        for (var VAR_4 = 0; VAR_4 < VAR_1.length; VAR_4++) {
          var VAR_5 = [];
          FUNCTION_1(VAR_1[VAR_4], VAR_5);
        }
    }
};