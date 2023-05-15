import React from 'react'

export default function PageLoaderWrapper({ loading, error, children, errorText, loadingText }) {
  return (
    <div className="mx-auto py-10 text-3xl">
      {error
        ? errorText
        : loading
          ? loadingText
          : children}
    </div>
  )
}
