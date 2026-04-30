const Benchmark = {
    run: function() {
        var VAR_1 = "abcdefghijklmnopqrstuvwxyz";
        var VAR_2 = VAR_1[Math.floor(Math.random() * 26)];
        var VAR_3 = false;
        var VAR_4 = "";
        for (letter in VAR_1) {
          if (VAR_3 || letter === VAR_2) {
            VAR_3 = true;
            VAR_4 += letter;
          }
        }
    }
};