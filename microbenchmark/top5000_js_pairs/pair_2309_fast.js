const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          var VAR_2 = [];
          for (let VAR_3 = 0; VAR_3 < VAR_1; VAR_3++) {
            VAR_2.push(VAR_3);
          }
          return VAR_2;
        }
        var VAR_4 = FUNCTION_1(10000);
        var VAR_5 = FUNCTION_1(10000);
        var VAR_6 = VAR_4.slice(0, VAR_4.length / 2);
        VAR_6.push(...VAR_5);
        VAR_6.push(VAR_4.slice(VAR_4.length / 2));
    }
};