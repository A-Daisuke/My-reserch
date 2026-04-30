const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          var VAR_3 = [];
          for (var VAR_4 = 0; VAR_4 < VAR_2; VAR_4++) VAR_3 = VAR_3.concat(VAR_1);
          return VAR_3.sort();
        }
        var VAR_5 = ["Amy", "Dolly", "Jason", "Madison", "Patricia"];
        var VAR_6 = FUNCTION_1(VAR_5, 1000);
        var VAR_12 = VAR_5.filter(/./.test, /^[A-J]/);
        var VAR_13 = VAR_6.filter(/./.test, /^[A-J]/);
    }
};