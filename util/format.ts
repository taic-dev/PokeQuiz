export function kanaFormat(string: string) {
  return string.replace( /[\u3042-\u3093]/g, 
    m => String.fromCharCode(m.charCodeAt(0) + 96)
  );
}