import somelib
from pprint import pp
def test_attrs():
    dir(somelib)
    r = somelib.ns.AttrOpaque1Renamed.totally_not_new()

    assert r.method_renamed() == 77, "Method should call"