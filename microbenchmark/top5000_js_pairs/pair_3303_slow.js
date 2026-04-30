const Benchmark = {
    run: function() {
        VAR_1 = [];
        VAR_2 = [];
        VAR_3 = [];
        for (var VAR_4 = 0; VAR_4 < 100; VAR_4++)
          VAR_1.push({
            KEY_1: "London",
            KEY_2: Math.random(),
          });
        for (var VAR_5 = 0; VAR_4 < 1000; VAR_4++)
          VAR_2.push({
            KEY_3: "London",
            KEY_4: Math.random(),
          });
        for (var VAR_6 = 0; VAR_4 < 10000; VAR_4++)
          VAR_3.push({
            KEY_5: "London",
            KEY_6: Math.random(),
          });
        function FUNCTION_1(VAR_7, VAR_8) {
          return VAR_7.KEY_2 - VAR_8.KEY_2;
        }
        VAR_2.sort(FUNCTION_1);
    }
};