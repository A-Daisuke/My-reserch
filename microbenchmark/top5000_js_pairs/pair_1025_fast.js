const Benchmark = {
    run: function() {
        var VAR_1 = new Array(100000).fill(13);
        function FUNCTION_1(VAR_5, VAR_6, VAR_7) {
          let VAR_8 = VAR_6;
          for (let VAR_9 = 0; VAR_9 < VAR_1.length; VAR_9++) {
            VAR_8 = VAR_7(VAR_8, VAR_1[VAR_9]);
          }
          return VAR_8;
        }
        const VAR_2 = FUNCTION_1(VAR_1, 0, (VAR_3, VAR_4) => VAR_3 + VAR_4);
    }
};