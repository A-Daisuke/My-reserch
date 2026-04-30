const Benchmark = {
    run: function() {
        VAR_1 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        VAR_2 = new String(VAR_1);
        for (var VAR_3 = 0; VAR_3 < VAR_1.length; VAR_3++) {
          VAR_1[VAR_3];
        }
    }
};