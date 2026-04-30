const Benchmark = {
    run: function() {
        var VAR_1 = new Uint8Array(100000);
        var VAR_2 = new Uint8Array(100000);
        new Uint8Array(VAR_2.buffer, 0, VAR_2.length).set(
          new Uint8Array(VAR_1.buffer, 0, VAR_1.length),
        );
    }
};