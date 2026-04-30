const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          var VAR_2 = [],
            VAR_6 = new WeakSet();
          for (var VAR_3 = 0; VAR_3 < VAR_1.length; VAR_3++) {
            if (!VAR_6.has(VAR_1[VAR_3])) {
              VAR_6.add(VAR_1[VAR_3]);
              VAR_2.push(VAR_1[VAR_3]);
            }
          }
          return VAR_2;
        }
        var VAR_4 = [];
        for (var VAR_5 = 1; VAR_5 <= 10000; VAR_5++) {
          VAR_4.push({ KEY_1: VAR_5 });
          if (VAR_5 % 3 === 0) {
            VAR_4.push(VAR_4[VAR_5 - 1]);
          }
        }
        FUNCTION_1(VAR_4);
    }
};