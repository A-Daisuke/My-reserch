const Benchmark = {
    run: function() {
        VAR_1 = { KEY_1: { KEY_2: 123 } };
        VAR_2 = [];
        for (var VAR_3 = 0; VAR_3 < 100; VAR_3++) {
          VAR_2.push(VAR_3);
        }
        try {
          VAR_1.z.y;
        } catch (VAR_4) {}
    }
};