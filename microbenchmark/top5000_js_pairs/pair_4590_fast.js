const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          var VAR_6 = 0;
          var VAR_7 = [];
          var VAR_8 = VAR_1.VAR_8;
          while (VAR_6 < VAR_8) {
            if (VAR_2[VAR_6] == undefined) {
              VAR_7.push(VAR_1[VAR_6]);
            } else {
              VAR_7.push(VAR_1[VAR_6], VAR_2[VAR_6]);
            }
            VAR_6++;
          }
          return VAR_7;
        }
        FUNCTION_1([1], [2]);
        FUNCTION_1([1, 2, 3, 4], [2, 5, 6, 6, 2]);
        FUNCTION_1([1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9]);
    }
};