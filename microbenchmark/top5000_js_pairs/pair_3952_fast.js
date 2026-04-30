const Benchmark = {
    run: function() {
        const VAR_1 = { KEY_1: "nope" };
        console.log(
          VAR_1 && VAR_1.bar && VAR_1.bar.baz && VAR_1.bar.baz.wow && VAR_1.bar.baz.wow.its
            ? VAR_1.bar.baz.wow.its.deep
            : undefined,
        );
    }
};