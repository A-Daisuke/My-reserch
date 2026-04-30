const Benchmark = {
    run: function() {
        var VAR_1 = new Map();
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          var VAR_3 = ~~(Math.random() * 1000 - 500);
          var VAR_4 = ~~(Math.random() * 1000 - 500);
          VAR_1.set(VAR_3 + " a ine dlhocizne retazce ktore nam to cele spomalia " + VAR_4, 1);
        }
    }
};