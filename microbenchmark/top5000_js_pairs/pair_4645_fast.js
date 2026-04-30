const Benchmark = {
    run: function() {
        var VAR_1 = [];
        function FUNCTION_1(VAR_2, VAR_3) {
          return {
            KEY_1: VAR_2,
            KEY_2: VAR_3,
            KEY_3: FUNCTION_2,
            KEY_4: FUNCTION_3,
            KEY_5: FUNCTION_4,
          };
          function FUNCTION_2() {}
          function FUNCTION_3() {}
          function FUNCTION_4() {}
        }
        VAR_1.push(FUNCTION_1("charles", "xavier"));
    }
};