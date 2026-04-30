const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          this.VAR_3 = VAR_1;
          this.VAR_4 = VAR_2;
        }
        var VAR_5 = Array();
        for (var VAR_6 = 0; VAR_6 < 100; VAR_6++) {
          var VAR_7 = new FUNCTION_1("My Name " + VAR_6, VAR_6);
          VAR_5.push(VAR_7);
        }
        var VAR_8 = "My Name 57";
        var VAR_9 = null;
        for (index in VAR_5) {
          if (VAR_5[index].VAR_3 == VAR_8) {
            VAR_9 = VAR_5[index];
            break;
          }
        }
    }
};