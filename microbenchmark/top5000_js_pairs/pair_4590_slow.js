const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          return VAR_1.reduce(function (VAR_3, VAR_4, VAR_5) {
            return VAR_3.concat(VAR_2[VAR_5] == undefined ? VAR_4 : VAR_4, VAR_2[VAR_5]);
          }, []);
        }
        FUNCTION_1([1], [2]);
        FUNCTION_1([1, 2, 3, 4], [2, 5, 6, 6, 2]);
        FUNCTION_1([1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9]);
    }
};