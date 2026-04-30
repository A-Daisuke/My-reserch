const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          var VAR_2 = VAR_1[VAR_1.length - 1];
          VAR_1.length--;
          return VAR_2;
        }
        var VAR_3 = [];
        var VAR_4 = new Array(2000);
        var VAR_5 = VAR_4.length;
        while (VAR_5--) {
          VAR_3.push(FUNCTION_1(VAR_4));
        }
    }
};