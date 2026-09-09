// Terminal helper notices share one quiet summary until a reader asks for the
// individual results. Other activity remains an ordering boundary.
export function groupHelperResultRows(notes = []) {
  const groups = []
  let helperRun = []
  const flush = () => {
    if (helperRun.length) groups.push(helperRun)
    helperRun = []
  }
  for (const note of notes) {
    if (note?.type === 'helper_result') helperRun.push(note)
    else {
      flush()
      groups.push([note])
    }
  }
  flush()
  return groups
}
