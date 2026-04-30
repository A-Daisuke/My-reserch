const Benchmark = {
    run: function() {
        var VAR_1 = [4, 2, 7];
        var VAR_2 = [];
        for (var VAR_3 = 0, VAR_4 = 5000; VAR_3 < VAR_4; VAR_3++) {
          VAR_2.push(VAR_3);
        }
        var VAR_5 = VAR_2.join();
    }
};