import PropTypes from 'prop-types'

export const P = ({ children }) => (
  <p>
    {children}
  </p>
)

export const PDIV = ({ children }) => (
  <div>
    {children}
  </div>
)

const B = ({ children }) => (
  <span>
    {children}
    <style jsx>
      {`
        span {
          font-weight: 500;
        }
      `}
    </style>
  </span>
)

export const HR = () => (
  <div>
    <style jsx>{`
      div {
        border: 0;
        border-bottom: 1px solid #ccc;
        margin: 50px 30px;
      }
    `}</style>
  </div>
)

export const Quote = ({ children }, { darkBg } = {}) => (
  <blockquote className={darkBg ? 'dark' : ''}>
    {children}
  </blockquote>
)

Quote.contextTypes = {
  darkBg: PropTypes.bool
}

P.B = B
