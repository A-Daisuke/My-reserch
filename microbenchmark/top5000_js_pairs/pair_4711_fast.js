const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          var VAR_5 = [],
            VAR_6 = VAR_1[0],
            VAR_7 = VAR_2[0],
            VAR_8 = 1,
            VAR_9 = 1;
          if (VAR_1.length == 0) return VAR_2;
          if (VAR_2.length == 0) return VAR_1;
          while (VAR_6 || VAR_7) {
            if ((VAR_6 && !VAR_7) || VAR_6 < VAR_7) {
              VAR_5.push(VAR_6);
              VAR_6 = VAR_1[VAR_8++];
            } else {
              VAR_5.push(VAR_7);
              VAR_7 = VAR_2[VAR_9++];
            }
          }
          return VAR_5;
        }
        FUNCTION_1([2, 5, 6, 9], [1, 2, 3, 29]);
    }
};