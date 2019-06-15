import React from 'react'
import Knight from './Student'
export const Piece = ({ isKnight }) => (isKnight ? <Knight /> : null)
