const Benchmark = {
    run: function() {
        var VAR_1 = 0;
        var VAR_2 = 200;
        console.log(VAR_2);
        for (var VAR_3 = -VAR_2; VAR_3 <= VAR_2; VAR_3++) {
          for (var VAR_4 = -VAR_2; VAR_4 <= VAR_2; VAR_4++) {
            if (VAR_3 * VAR_3 + VAR_4 * VAR_4 <= VAR_2 * VAR_2) {
              VAR_1 += 1;
            }
          }
        }
        console.log(VAR_1);
    }
};