const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2 = 0;
        for (; VAR_2 < 100000; VAR_2++) {
          VAR_1.push(
            "I'm doing a (free) operating system (just a hobby, won't be big and professional like gnu) for 386(486) AT clones.",
          );
        }
        var VAR_3 = VAR_1.join();
    }
};