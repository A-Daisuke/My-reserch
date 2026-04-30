const Benchmark = {
    run: function() {
        var VAR_1, VAR_2;
        function FUNCTION_1() {
          VAR_2.push(
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          );
        }
        VAR_2 = [];
        for (var VAR_3 = 0; VAR_3 < 10000; VAR_3++) {
          FUNCTION_1();
        }
        VAR_1 = VAR_2.join("");
    }
};