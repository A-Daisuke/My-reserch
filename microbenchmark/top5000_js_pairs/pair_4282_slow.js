const Benchmark = {
    run: function() {
        var VAR_1 = [
          [[1]],
          [[2, 3], [3]],
          [[3, 4], [5], [6]],
          [[5]],
          [[6, 7, 8]],
          [
            [9, 10],
            [11, 12],
          ],
          [[9, 10]],
          [[8]],
        ];
        function FUNCTION_1(VAR_2) {
          return VAR_2.reduce(function (VAR_3, VAR_4) {
            return VAR_3.concat(VAR_4.constructor === Array ? FUNCTION_1(VAR_4) : VAR_4);
          }, []);
        }
        FUNCTION_1(VAR_1);
    }
};