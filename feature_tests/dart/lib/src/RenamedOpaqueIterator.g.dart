// generated by diplomat-tool
// dart format off

part of 'lib.g.dart';

final class RenamedOpaqueIterator implements ffi.Finalizable, core.Iterator<AttrOpaque1Renamed> {
  final ffi.Pointer<ffi.Opaque> _ffi;

  // These are "used" in the sense that they keep dependencies alive
  // ignore: unused_field
  final core.List<Object> _selfEdge;
  // ignore: unused_field
  final core.List<Object> _aEdge;

  // This takes in a list of lifetime edges (including for &self borrows)
  // corresponding to data this may borrow from. These should be flat arrays containing
  // references to objects, and this object will hold on to them to keep them alive and
  // maintain borrow validity.
  RenamedOpaqueIterator._fromFfi(this._ffi, this._selfEdge, this._aEdge) {
    if (_selfEdge.isEmpty) {
      _finalizer.attach(this, _ffi.cast());
    }
  }

  static final _finalizer = ffi.NativeFinalizer(ffi.Native.addressOf(_namespace_OpaqueIterator_destroy));

  AttrOpaque1Renamed? _current;

  @override
  AttrOpaque1Renamed get current => _current!;

  @override
  bool moveNext() {
    _current = _iteratorNext();
    return _current != null;
  }

  AttrOpaque1Renamed? _iteratorNext() {
    final result = _namespace_OpaqueIterator_next(_ffi);
    return result.address == 0 ? null : AttrOpaque1Renamed._fromFfi(result, []);
  }
}

@_DiplomatFfiUse('namespace_OpaqueIterator_destroy')
@ffi.Native<ffi.Void Function(ffi.Pointer<ffi.Void>)>(isLeaf: true, symbol: 'namespace_OpaqueIterator_destroy')
// ignore: non_constant_identifier_names
external void _namespace_OpaqueIterator_destroy(ffi.Pointer<ffi.Void> self);

@_DiplomatFfiUse('namespace_OpaqueIterator_next')
@ffi.Native<ffi.Pointer<ffi.Opaque> Function(ffi.Pointer<ffi.Opaque>)>(isLeaf: true, symbol: 'namespace_OpaqueIterator_next')
// ignore: non_constant_identifier_names
external ffi.Pointer<ffi.Opaque> _namespace_OpaqueIterator_next(ffi.Pointer<ffi.Opaque> self);

// dart format on
