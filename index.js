function receivesAFunction(cb) {
    return (cb());
}

returnsANamedFunction('function', function (fn) { return ('function') });
