const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          for (var VAR_2 = 0; VAR_1 >= VAR_2 * VAR_2; VAR_2++) if (VAR_2 * VAR_2 === VAR_1) return VAR_2;
          return [VAR_2 - 1, VAR_2];
        }
        console.log(FUNCTION_1(81000000000));
    }
};