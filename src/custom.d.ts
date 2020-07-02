type SvgrComponent = React.StatelessComponent<React.SVGAttributes<SVGElement>>

declare module '*.svg' {
  const value: SvgrComponent
  export default value
}

declare module '*.json' {
  const content: Record<string, unknown>
  export default content
}
